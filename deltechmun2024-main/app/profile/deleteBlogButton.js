"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";
import { Button } from "@/app/components/ui/button";
import service from "@/app/lib/hygraphServices";
import { AiOutlineDelete } from "react-icons/ai";
import { useToast } from "@/app/components/ui/use-toast";

const DeleteBlogButton = ({blogId}) => {
  const { toast } = useToast();
  function handleDelete(blogId) {
    service.deleteBlog(blogId);
    toast({
      variant: "destructive",
      title: "Successfully Deleted!",
      description: "Blog has been deleted.",
    });
  }
  console.log(blogId);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <AiOutlineDelete size={15} className="mr-2" /> Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your blog
            and remove it from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(blogId)}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBlogButton;
