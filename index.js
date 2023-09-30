import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Bryce Pillwein",
    component: HomeView,
  },
  {
    path: "/about",
    name: "Bryce Pillwein - About",
    component: () => import( "@/views/AboutView.vue"),
  },
  {
    path: "/projects",
    name: "Bryce Pillwein - Projects",
    component: () => import( "@/views/ProjectsView.vue"),
  },
  {
    path: "/contact",
    name: "Bryce Pillwein - Contact",
    component: () => import( "@/views/ContactView.vue"),
  },
  {
    path: "/blog",
    name: "Bryce Pillwein - Blogs",
    component: () => import("@/views/Blogs.vue"),
  },
  {
    path: "/blog/:postId",
    name: "Bryce Pillwein - Blog Post",
    component: () => import( "@/views/Blogs.vue"),
  },
  {
    path: "/resume",
    name: "Bryce Pillwein - Resume",
    component: () => import( "@/views/Resume.vue"),
  },
  {
    path: "/authentication",
    name: "Authentication",
    component: () => import( "@/views/Authentication.vue"),
  },
  {
    path: '/create-blog-post',
    name: 'Admin - Create Blog Post',
    component: () => import('@/views/ManageBlogs.vue'),
    meta: {
      requiresAuth: true,
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user)
      },
      reject
    )
  });
}

router.beforeEach(async (to, from, next) => {
  document.title = to.name; // Update the title of each page
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert('You dont have access!');
      next('/');
    }
  } else {
    next();
  }
});

export default router;