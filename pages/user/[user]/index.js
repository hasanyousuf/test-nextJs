import { useEffect } from "react";
import { useRouter } from "next/router";

const useUser = () => ({ user: hasan, loading: false});

const UserIndex = () => {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if(user.user == null){
        router.replace("/")
    }},[])

  return (
    <div>
      <h1>This is user index page for {router.query.user}</h1>
      <button
        onClick={() =>
          router.push({
            pathname: "/user/[user]/settings",
            query: {user:'Hasan'}})
        }
      >
        Open Settings page
      </button>
      <hr></hr>
      <button
      onClick={() => router.push("/")}
      
      >
      Go to Home
      </button>
    </div>
  );
};

export default UserIndex;
