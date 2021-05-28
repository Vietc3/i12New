import React from 'react';
import { Text, Input, Button, chakra, BoxProps } from '@chakra-ui/react';
import Card from './cards/Card';
import {
    FaPaperPlane,
} from "react-icons/fa";
import { useFormik } from 'formik';
import { toast } from "react-toastify";

import { useUpdateSubscriber } from '../helpers/subscribers';
const NewsletterForm = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: async values => {
            let result = await useUpdateSubscriber(values.email);
            result === 200 ? toast.success("Subscriber Successfully") : toast.warning("Subscribe Failed")
        },
    });

    return (
        <Card textAlign="center" w="100%" bg="red">
            <Text color="white" fontWeight="bold" margin=".5rem">
                Get the lastest updates about out stories.
            </Text>
            <Text color="white" fontWeight="bold" margin=".5rem">
                Subscribe to our newsletter now!
            </Text>
            <chakra.form onSubmit={formik.handleSubmit}>
                <Input id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email} variant="outline" bg="white" placeholder="Your Email Address" borderRadius={'full'} margin=".5rem" />
                <Button type="submit" leftIcon={<FaPaperPlane />} bgColor="black" color="white" borderRadius={'full'} width="100%" margin=".5rem">
                    Subscribe
            </Button>
            </chakra.form>
            <Text fontSize=".7rem" color="white" margin="3px">
                By subscribing, you agree to our{' '}

            </Text>

        </Card>
    );
};

export default NewsletterForm;
