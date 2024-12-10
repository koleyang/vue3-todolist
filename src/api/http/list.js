import request from '@/api/request';

export function fetchList() {
    return request({
      url: '/mock/list.json', // 相对于 baseURL 的路径
      method: 'get',
    });
}

// export function getUserInfo(userId) {
//   return request({
//     url: `/users/${userId}`,
//     method: 'get',
//   });
// }

// export function updateUserInfo(userId, data) {
//   return request({
//     url: `/users/${userId}`,
//     method: 'put',
//     data,
//   });
// }

// export function deleteUser(userId) {
//   return request({
//     url: `/users/${userId}`,
//     method: 'delete',
//   });
// }