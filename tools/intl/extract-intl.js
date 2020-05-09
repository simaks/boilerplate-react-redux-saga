const fs = require("fs");
const exec = require("child_process").exec;
const { SUPPORTED_LOCALES, DEFAULT_LOCALE } = require("./locales");

exec("formatjs extract src/**/messages.js", (error, stdout, stderr) => {
  if (stderr) {
    throw stderr;
  }
  const defaultMessages = JSON.parse(stdout).reduce(
    (allMessages, translation) => {
      const { id, defaultMessage } = translation;
      allMessages[id] = defaultMessage;
      return allMessages;
    },
    {}
  );

  const emptyMessages = Object.entries(defaultMessages).reduce(
    (emptyMessages, [id]) => {
      emptyMessages[id] = "";
      return emptyMessages;
    },
    {}
  );

  const defaultTranslationFile = `src/translations/${DEFAULT_LOCALE}.json`;
  // Overwrite messages for default locale
  fs.writeFileSync(
    defaultTranslationFile,
    `${JSON.stringify(defaultMessages, null, 2)}\n`
  );
  console.log(`Updated "${defaultTranslationFile}".`);

  // Add missing keys to translation files
  Object.values(SUPPORTED_LOCALES).forEach((locale) => {
    if (locale === DEFAULT_LOCALE) {
      return;
    }
    const translationFile = `src/translations/${locale}.json`;
    let localeMessages;
    try {
      localeMessages = JSON.parse(fs.readFileSync(translationFile, "utf8"));
    } catch (e) {
      if (e.code === "ENOENT") {
        console.log(`Creating file "${translationFile}"...`);
      } else {
        console.error(`Failed reading file "${translationFile}".`);
        console.error(e);
      }
      return;
    }

    try {
      fs.writeFileSync(
        translationFile,
        `${JSON.stringify({ ...emptyMessages, ...localeMessages }, null, 2)}\n`
      );
      console.log(`Updated "${translationFile}".`);
    } catch (e) {
      console.error(`Failed writing file "${translationFile}".`);
      console.error(e);
    }
  });
});
