import { Avatar, Card, CardHeader, Typography } from "@material-tailwind/react";

interface FeedbackProps {
  id: number;
  name: string;
  text: string;
  avatar: string;
}

export const Feedback = ({ id, name, avatar, text }: FeedbackProps) => {
  /*  function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-yellow-700"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  } */

  return (
    <Card key={id} shadow={false} className="bg-transparent m-auto">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 my-3 flex items-center gap-1.5 "
      >
        <Avatar size="md" variant="circular" src={avatar} alt="tania andrew" />

        <div className="flex w-full flex-col gap-0.5 ">
          <div className="flex flex-col gap-0.5 mt-5">
            <Typography className="text-sm lg:text-base">{text}</Typography>
            <Typography className="text-sm  lg:text-base font-bold text-black">
              {name}
            </Typography>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
