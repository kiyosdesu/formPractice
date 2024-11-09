import { VStack } from "@chakra-ui/react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  return (
    <VStack justify="center" alignItems="center" height="69vh">
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        name
        <input type="text" {...register("name")} />
        kagaghona
        <input type="text" />
        <input type="submit" value="Submit" {...register("kagaguhan")} />
      </form>
    </VStack>
  );
}

export default App;
