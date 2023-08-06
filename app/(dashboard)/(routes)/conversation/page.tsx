'use client';

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ConversationPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <div>
            <Heading 
                title="Conversation"
                description="Chat with the most advanced AI model"
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form 
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="rounded-lg border p-4 w-full px-3 md:px-6 grid grid-cols-12 gap-2"
                        >
                            <FormField 
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                                disabled={isLoading}
                                                placeholder="How can I become a FullStack web developer"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button 
                                className="w-full col-span-12 lg:col-span-2 hover:bg-violet-700"
                                disabled={isLoading}
                            >
                                Generate
                            </Button>
                        </form> 
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    Message content
                </div>
            </div>
        </div>
    );
}
 
export default ConversationPage;