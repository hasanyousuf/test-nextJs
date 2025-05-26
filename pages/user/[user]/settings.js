import { useRouter } from "next/router";


const Settings = () => {
  const router  = useRouter();

return (
        <div>
            <h1>This is setting page for {router.query.user}</h1>
        </div>
    );
    };

export default Settings;