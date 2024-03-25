import { Button, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Paper
        elevation={4}
        className=" h-[360px] w-[360px] flex items-center justify-center"
      >
        <Button>
          <Link href={"./gradient-effect"}> gradient effect</Link>
        </Button>
      </Paper>
    </div>
  );
}
