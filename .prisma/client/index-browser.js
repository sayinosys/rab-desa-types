
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('@prisma/client/runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.CompanyScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.FileScalarFieldEnum = {
  id: 'id',
  name: 'name',
  url: 'url',
  size: 'size',
  width: 'width',
  height: 'height',
  type: 'type',
  groupId: 'groupId'
};

exports.Prisma.HistoriScalarFieldEnum = {
  id: 'id',
  type: 'type',
  model: 'model',
  step: 'step',
  message: 'message',
  refId: 'refId',
  createdAt: 'createdAt',
  userId: 'userId',
  companyId: 'companyId',
  optionId: 'optionId',
  unitId: 'unitId',
  itemId: 'itemId',
  workId: 'workId',
  workItemsId: 'workItemsId',
  templateId: 'templateId',
  imageId: 'imageId',
  fileId: 'fileId'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.ItemScalarFieldEnum = {
  id: 'id',
  model: 'model',
  categoryId: 'categoryId',
  typeId: 'typeId',
  unitId: 'unitId',
  code: 'code',
  name: 'name',
  price: 'price',
  trim: 'trim',
  active: 'active',
  introIds: 'introIds'
};

exports.Prisma.OptionScalarFieldEnum = {
  id: 'id',
  type: 'type',
  code: 'code',
  name: 'name'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.SpaceScalarFieldEnum = {
  id: 'id',
  refId: 'refId',
  name: 'name'
};

exports.Prisma.StageScalarFieldEnum = {
  id: 'id',
  workId: 'workId',
  type: 'type',
  operation: 'operation',
  parentId: 'parentId',
  refs: 'refs',
  refParent: 'refParent',
  name: 'name'
};

exports.Prisma.TemplateDEDScalarFieldEnum = {
  id: 'id',
  dataId: 'dataId',
  name: 'name'
};

exports.Prisma.TemplateDataScalarFieldEnum = {
  id: 'id',
  step: 'step',
  publish: 'publish',
  templateId: 'templateId'
};

exports.Prisma.TemplateFieldScalarFieldEnum = {
  id: 'id',
  dataId: 'dataId',
  name: 'name',
  imageId: 'imageId',
  imageUrl: 'imageUrl'
};

exports.Prisma.TemplateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  activeId: 'activeId'
};

exports.Prisma.TemplateWorkItemScalarFieldEnum = {
  id: 'id',
  type: 'type',
  itemId: 'itemId',
  coefficient: 'coefficient',
  unitId: 'unitId',
  parentId: 'parentId'
};

exports.Prisma.TemplateWorkScalarFieldEnum = {
  id: 'id',
  dataId: 'dataId',
  workId: 'workId'
};

exports.Prisma.UnitScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  username: 'username',
  password: 'password',
  passhash: 'passhash',
  role: 'role',
  active: 'active',
  companyId: 'companyId'
};

exports.Prisma.WorkItemsScalarFieldEnum = {
  id: 'id',
  model: 'model',
  workId: 'workId',
  itemId: 'itemId',
  coefficient: 'coefficient',
  unitId: 'unitId'
};

exports.Prisma.WorkScalarFieldEnum = {
  id: 'id',
  model: 'model',
  code: 'code',
  name: 'name',
  active: 'active',
  typeId: 'typeId',
  unitId: 'unitId'
};
exports.EFieldType = {
  long: 'long',
  height: 'height',
  width: 'width',
  amount: 'amount'
};

exports.HistoriModel = {
  User: 'User',
  Company: 'Company',
  Option: 'Option',
  Unit: 'Unit',
  Item: 'Item',
  Work: 'Work',
  WorkItems: 'WorkItems',
  Template: 'Template',
  Image: 'Image',
  File: 'File'
};

exports.HistoriType = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

exports.ItemModel = {
  UPAH: 'UPAH',
  ALAT: 'ALAT',
  BAHAN: 'BAHAN',
  MULAI: 'MULAI'
};

exports.OptionType = {
  CATEGORY: 'CATEGORY',
  TYPE: 'TYPE',
  WORK: 'WORK',
  GROUP: 'GROUP'
};

exports.StageOpr = {
  PLUS: 'PLUS',
  MINUS: 'MINUS',
  TIMES: 'TIMES',
  FOR: 'FOR'
};

exports.StageType = {
  LONG: 'LONG',
  HEIGHT: 'HEIGHT',
  WIDTH: 'WIDTH',
  AMOUNT: 'AMOUNT',
  AROUND: 'AROUND',
  BROAD: 'BROAD',
  VOLUME: 'VOLUME'
};

exports.UserRole = {
  SU: 'SU',
  ADM: 'ADM',
  USR: 'USR'
};

exports.WorkModel = {
  UMUM: 'UMUM',
  CIPTA_KARYA: 'CIPTA_KARYA',
  BINA_MARGA: 'BINA_MARGA',
  SDA: 'SDA',
  CUSTOM: 'CUSTOM'
};

exports.Prisma.ModelName = {
  Histori: 'Histori',
  Company: 'Company',
  User: 'User',
  File: 'File',
  Image: 'Image',
  Option: 'Option',
  Unit: 'Unit',
  Item: 'Item',
  Work: 'Work',
  WorkItems: 'WorkItems',
  Template: 'Template',
  TemplateWorkItem: 'TemplateWorkItem',
  TemplateWork: 'TemplateWork',
  TemplateData: 'TemplateData',
  TemplateField: 'TemplateField',
  TemplateDED: 'TemplateDED',
  Space: 'Space',
  Stage: 'Stage'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
