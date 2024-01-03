import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import App from "./App";
import Greetings from "./components/greetings";
import Crud from "./components/crud";
import ListPosts from "./components/blog/ListPost";
import CreatePost from "./components/blog/CreatePost";
import ViewPost from "./components/blog/ViewPost";
import EditPost from "./components/blog/PostListItem";
const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    { path: 'greeting/:name', element: <Greetings/>},
    { path: 'aboutus', element: <Aboutus/> },
    { path: 'crud', element: < Crud/> },
    { path: 'blog/posts', element: <ListPosts/> },
    { path: 'blog/posts/create', element: <CreatePost/> },
    { path: 'blog/posts/:postId', element: <ViewPost/>},
    { path : '/blog/posts/:postId/edit', element: <EditPost/>},
]);

export default router;