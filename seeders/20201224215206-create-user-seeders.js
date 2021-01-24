'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',[
      {
        name:"Ulza",
        profession:"Admin Micro",
        role:"admin",
        email:"ulza@gmail.com",
        password: await bcrypt.hash("12345678",10),
        created_at:new Date(),
        updated_at:new Date(),
      },
      {
        name:"Cindy",
        profession:"Front End Developer",
        role:"student",
        email:"cindy@gmail.com",
        password: await bcrypt.hash("12345678",10),
        created_at:new Date(),
        updated_at:new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users',null,{});
  }
};
