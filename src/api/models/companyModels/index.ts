const createCompany = require('./createCompany');
const getCompaniesAll = require('./getCompaniesAll');
const getCompanyById = require('./getCompanyById');
const getCompanyByDocument = require('./getComapnyByDocument');
const getCompaniesByCustomerId = require('./getCompaniesByCustomerId');

module.exports = {
  createCompany,
  getCompaniesAll,
  getCompanyById,
  getCompanyByDocument,
  getCompaniesByCustomerId,
};
