import { useEffect } from "react";
import { useRouter } from "next/router";

// Mock user data
const useUser = () => ({ user: { name: "Hasan" }, loading: false });

const UserIndex = () => {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user.user == null) {
      router.replace("/");
    }
  }, [router, user.user]);

  return (
    <div>
      <h1>This is user index page for {router.query.user}</h1>
      <button
        onClick={() =>
          router.push({
            pathname: "/user/[user]/settings",
            query: { user: "Hasan" },
          })
        }
      >
        Open Settings page
      </button>
      <hr />
      <button onClick={() => router.push("/")}>Go to Home</button>
    </div>
  );
};

export default UserIndex;
