// @ts-ignore

/* eslint-disable */
import { request } from 'umi';
/** 获取当前的用户 GET /api/currentUser */

export async function currentUser(options) {
  console.log(options)
  return request('http://localhost:3000/api/getcurrentUser', {
    method: 'GET',
    params:{
      username:options
    },
    // ...(options || {}),
  });
}
/** 退出登录接口 POST /api/login/outLogin */

export async function outLogin(options) {
  return request('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}
/** 登录接口 POST /api/login/account */
export async function login(body, options) {
  return request('http://localhost:3000/admin/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
/** 此处后端没有提供注释 GET /api/notices */

export async function getNotices(options) {
  return request('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}
/** 获取规则列表 GET /api/rule */

export async function rule(params, options) {
  return request('/api/rule', {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}
/** 新建规则 PUT /api/rule */

export async function updateRule(options) {
  return request('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}
/** 新建规则 POST /api/rule */

export async function addRule(options) {
  return request('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}
/** 删除规则 DELETE /api/rule */

export async function removeRule(options) {
  return request('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
/** 添加列表 /admin/api/categories */
export async function addCategory(data) {
  console.log(data)
  return request('http://localhost:3000/admin/api/categories', {
    method: 'POST',
    data,
  });
}

/** 分类列表 /admin/api/categorie */
export async function getCategory(data) {
  return request('http://localhost:3000/admin/api/categories', {
    method: 'GET',
    data,
  });
}


/** 更新分类列表 /admin/api/categorie */
export async function updateCategory(data) {
  return request('http://localhost:3000/admin/api/categories/update', {
    method: 'POST',
    data,
  });
}

/** 删除分类列表 /admin/api/categorie */
export async function deleteCategory(data) {
  return request('http://localhost:3000/admin/api/categories/delete', {
    method: 'DELETE',
    data,
  });
}

/* ------------------------------ 管理员账户api---------------------------------------- */

/** 添加账号  */
export async function addAdminAccount(data) {
  return request('http://localhost:3000/admin/api/account/add', {
    method: 'POST',
    data,
  });
}

/** 获取账号列表  */
export async function getAdminAccountList() {
  return request('http://localhost:3000/admin/api/account/get', {
    method: 'GET',
  });
}

/** 删除管理员账号 /admin/api/categorie */
export async function deleteAdminAccount(data) {
  return request('http://localhost:3000/admin/api/account/delete', {
    method: 'DELETE',
    data,
  });
}


/* ------------------------------ 普通用户账户api---------------------------------------- */

/** 添加账号  */
export async function addUserAccount(data) {
  return request('http://localhost:3000/admin/api/account/user/add', {
    method: 'POST',
    data,
  });
}




