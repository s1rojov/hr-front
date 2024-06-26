import { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('src/views/auth/index.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'hr',
        name: 'HR',
        component: () => import('src/views/hr/index.vue'),
        children: [
          {
            path: '',
            name: 'Dashboard',
            component: () =>
              import('src/views/hr/childrens/dashboard/index.vue'),
          },
          {
            path: 'leadership',
            name: 'Leadership',
            component: () =>
              import('src/views/hr/childrens/leadership/index.vue'),
          },
          {
            path: 'division',
            name: 'Division',
            component: () => import('src/views/hr/childrens/division/index.vue'),
          },
          {
            path: 'department',
            name: 'Department',
            component: () =>
              import('src/views/hr/childrens/department/index.vue'),
          },
          {
            path: 'department-head',
            name: 'Department head',
            component: () =>
              import('src/views/hr/childrens/departmentHead/index.vue'),
          },
          {
            path: 'kafedra',
            name: 'Kafedra',
            component: () => import('src/views/hr/childrens/kafedra/index.vue'),
          },
          {
            path: 'position',
            name: 'Position hr',
            component: () =>
              import('src/views/hr/childrens/position/index.vue'),
          },
          {
            path: 'employee',
            name: 'Employee hr',
            component: () =>
              import('src/views/hr/childrens/employee/index.vue'),
          },
          {
            path: 'application',
            name: 'Application hr',
            component: () =>
              import('src/views/hr/childrens/application/index.vue')
          }
        ],
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('src/views/admin/index.vue'),
      },
      {
        path: 'employee',
        name: 'Employee',
        component: () => import('src/views/employee/index.vue'),
        children: [
          {
            path: '',
            name: 'Private data',
            component: () => import('src/views/employee/private/index.vue')
          },
          {
            path: 'application',
            name: 'Application',
            component: () => import('src/views/employee/application/index.vue')
          }
        ]
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
