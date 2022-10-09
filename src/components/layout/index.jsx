import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div>layout</div>
      <Outlet />
      <div>bottom-bar</div>
    </div>
  )
}
