import Navbar from "../Components/Navbar";

export default function CoursesPage() {
  return (
    <div>
      <div className="navbarSection"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <div style={{ width: "74%", margin:"auto" }}>
          <Navbar />
        </div>
      </div>
      <></>
    </div>
  );
}
