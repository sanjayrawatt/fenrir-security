import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen md:ml-0 pt-16 md:pt-0">
          <div className="p-4 md:p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
