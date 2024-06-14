import { Button } from "@/components/button";

export const Hero = () => {
  return (
    <section>
      Olá mundo, HEROOOO!
      <div className="">
        <Button
          text="Confirmar"
          background="bg-black"
          border={true}
          handleClick={() => console.log("OIIE")}
        />
        <Button
          text=""
          background=""
          border={false}
          handleClick={() => console.log("OIIE")}
        />
      </div>
    </section>
  );
};
