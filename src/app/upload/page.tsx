import {requireAuth} from "@/lib/authActions";

const Page = () => {
  requireAuth()  
  return (
      <main>
        <h1 className="text-4xl font-bold">
          Upload
        </h1>
      </main>
    );
  };
  
  export default Page;