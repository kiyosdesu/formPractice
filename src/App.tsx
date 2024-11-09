import { VStack, Text, HStack } from "@chakra-ui/react";
import "./App.css";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "name must be atleast 3 chars" }),
  kagaguhanLvl: z.number({ invalid_type_error: "enter your gagones" }).min(5),
});

type FormData = z.infer<typeof schema>;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <VStack justify="center" alignItems="center" height="69vh">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          <HStack alignSelf="start">
            <input type="text" {...register("name")} />
            name
          </HStack>
          {errors.name && (
            <Text alignSelf="start" color="red">
              {errors.name.message}
            </Text>
          )}

          <HStack>
            <input
              type="number"
              {...register("kagaguhanLvl", { valueAsNumber: true })}
            />
            kagaghona
          </HStack>

          <input type="submit" value="Submit" />
        </VStack>
      </form>
    </VStack>
  );
}

export default App;
