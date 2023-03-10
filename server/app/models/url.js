module.exports = (sequelize, Sequelize) => {
    const url = sequelize.define("url", {
      url: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      shortUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      // don't delete database entries but set the newly added attribute deletedAt
      // to the current date (when deletion was done).
      paranoid: true,
      // don't use camelcase for automatically added attributes but underscore style
      underscored: true,
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true,
    });
    return url;
  };