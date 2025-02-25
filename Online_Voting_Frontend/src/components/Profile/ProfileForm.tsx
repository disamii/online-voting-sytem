import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from '@/components/ui/input';
import {
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormField,
} from "@/components/ui/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProfileSchema } from '@/types/schema';
import { profileInitialValues } from '@/types/initialValues';
import { UserProfile } from '@/types/interfaces';
import { VoterProfileReturn } from '@/types/interfaces'
import { formatDate } from '@/utils/formdate';
import { Button } from '../ui/button';
import { postProfile } from '@/service/userAPI';


const ProfileForm: React.FC = () => {

    const queryClient = useQueryClient();
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const mutation = useMutation<VoterProfileReturn, Error, UserProfile>({
        mutationFn: postProfile,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user_profile'] });
        },
    });



    const form = useForm<UserProfile>({
        resolver: yupResolver(ProfileSchema),
        defaultValues: profileInitialValues
    });

    const onSubmit = async (data: UserProfile) => {
        try {
            await mutation.mutateAsync(data)
        } catch (error) {
            console.error(error)
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, field: any) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
                field.onChange(file);
            };
            reader.readAsDataURL(file);
        } else {
            setImageSrc(null);
            field.onChange(null);
        }
    };

    

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4 ">
                <FormField
                    control={form.control}
                    name="photo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className=' text-accent'>Enter Image</FormLabel>
                            <FormControl>
                                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer m-auto">

                                    {imageSrc ? (
                                        <img
                                            src={imageSrc}
                                            alt="Avatar"
                                            className="object-cover w-full h-full rounded-full"
                                        />
                                    ) : (
                                        <span className="flex items-center justify-center w-full h-full text-gray-400">
                                            No Image Selected
                                        </span>
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleFileChange(e, field)} 
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                    />
                                </div>
                            </FormControl>
                            <FormMessage className=' text-red-400' />
                        </FormItem>
                    )}
                />
                <div className='grid grid-cols-2 gap-7'>
                    <FormField
                        control={form.control}
                        name="first_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className=' text-accent'>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="First Name" {...field} />
                                </FormControl>
                                <FormMessage className=' text-red-400' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="last_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className=' text-accent'>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Last Name" {...field} />
                                </FormControl>
                                <FormMessage className=' text-red-400' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className=' text-accent'>Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Address" {...field} />
                                </FormControl>
                                <FormMessage className=' text-red-400' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="region"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className=' text-accent'>Region</FormLabel>
                                <FormControl>
                                    <Input placeholder="Region" {...field} />
                                </FormControl>
                                <FormMessage className=' text-red-400' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className=' text-accent'>Gender</FormLabel>
                                <FormControl>
                                    <Input placeholder="Gender" {...field} />
                                </FormControl>
                                <FormMessage className=' text-red-400' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date_of_birth"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className=' text-accent'>Date of Birth</FormLabel>
                                <FormControl>
                                    <Input
                                        type="date"
                                        {...field}
                                        value={field.value ? formatDate(field.value) : ''} // Format for input
                                        onChange={(e) => {
                                            const newDate = new Date(e.target.value); // Convert string back to Date
                                            field.onChange(newDate); // Update form state
                                        }}
                                    />
                                </FormControl>
                                <FormMessage className=' text-red-400' />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" className="w-full">Submit</Button>
            </form>
        </Form>
    );
};

export default ProfileForm;
