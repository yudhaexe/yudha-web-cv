import { Button } from "@/components/ui/button";
import Image from "next/image";
import avatar_yudha from "@/components/assets/avatarYudha2.jpg";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <div className="flex flex-wrap gap-10">
      <Card className="w-[350px] ">
        <CardHeader>
          <Image
            alt="Project Screenshot"
            className="w-full h-auto"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mt-4">Lorem</h3>
          <span className="text-sm text-[#A0AEC0]">2020</span>
          <p className="mt-2 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, esse
            nisi iste porro architecto a maxime. Voluptatibus doloribus
            eligendi, neque dolores sequi esse tenetur ea, corrupti, quia
            consectetur commodi similique.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end mt-4">
          <Button className="text-[#A0AEC0] border-[#A0AEC0]" variant="ghost">
            View
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-[350px] ">
        <CardHeader>
          <Image
            alt="Project Screenshot"
            className="w-full h-auto"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mt-4">Lorem</h3>
          <span className="text-sm text-[#A0AEC0]">2020</span>
          <p className="mt-2 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, esse
            nisi iste porro architecto a maxime. Voluptatibus doloribus
            eligendi, neque dolores sequi esse tenetur ea, corrupti, quia
            consectetur commodi similique.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end mt-4">
          <Button className="text-[#A0AEC0] border-[#A0AEC0]" variant="ghost">
            View
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-[350px] ">
        <CardHeader>
          <Image
            alt="Project Screenshot"
            className="w-full h-auto"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mt-4">Lorem</h3>
          <span className="text-sm text-[#A0AEC0]">2020</span>
          <p className="mt-2 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, esse
            nisi iste porro architecto a maxime. Voluptatibus doloribus
            eligendi, neque dolores sequi esse tenetur ea, corrupti, quia
            consectetur commodi similique.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end mt-4">
          <Button className="text-[#A0AEC0] border-[#A0AEC0]" variant="ghost">
            View
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-[350px] ">
        <CardHeader>
          <Image
            alt="Project Screenshot"
            className="w-full h-auto"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mt-4">Lorem</h3>
          <span className="text-sm text-[#A0AEC0]">2020</span>
          <p className="mt-2 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, esse
            nisi iste porro architecto a maxime. Voluptatibus doloribus
            eligendi, neque dolores sequi esse tenetur ea, corrupti, quia
            consectetur commodi similique.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end mt-4">
          <Button className="text-[#A0AEC0] border-[#A0AEC0]" variant="ghost">
            View
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
