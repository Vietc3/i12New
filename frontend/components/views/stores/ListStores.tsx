import { Box, SimpleGrid, Switch, Stack, Text, HStack, Select } from "@chakra-ui/react";
import React, { useState, useEffect, useMemo } from 'react';
import { sortBy, getCategories } from "../../../helpers/commonFuction";
import StoreCard from "../../cards/StoreCard";
import FilterFirstCharacter from "../../filter/filterFirstCharacter"
type Props = {
    stores: any;
    categories: any;
    margin?: number;
    containerHeight?: number;
}

type PropsCategories = {
    categories: any;
    value: any;
    handleCategories: any;
    margin?: number;
    containerHeight?: number;
}



const ListCategories = ({ categories, handleCategories, value }: PropsCategories) => {
    const data = getCategories(categories)
    return (<Select
        id="categories"
        name="categories"
        mt={1}
        focusBorderColor="brand.400"
        size="sm"
        rounded="md"
        w="300px"
        value={value}
        onChange={(e) => handleCategories(e.target.value)}
    ><option value='all'>All</option>
        {
            data.map((category: any) => <option key={category} value={category}>{category}</option>)
        }
    </Select>)

}

const ListStores = ({
    categories,
    stores
}: Props) => {
    const [listStores, setlistStores] = useState(stores);

    const [listStoresSearch, setlistStoresSearch] = useState(stores);

    const [listStoresCatelories, setlistStoresCatelories] = useState(stores);

    const [fristChar, setFristChar] = useState('asc');

    const [category, setCategory] = useState('all');

    const [params, setParams] = useState([false, false, false]);

    useEffect(() => {
        if (fristChar === 'asc') {
            sortBy(stores, 'name', 'asc', setlistStores)
            sortBy(stores, 'name', 'asc', setlistStoresSearch)
        }
        else if (fristChar === "09") {

            const data = stores.filter((store: any) => Number.isInteger(+store.name[0].toUpperCase()))
            setlistStores(data)
            setlistStoresSearch(data)

        }
        else {
            const data = stores.filter((store: any) => store.name[0].toUpperCase() === fristChar)
            setlistStores(data)
            setlistStoresSearch(data)

        }
    }, [fristChar]);

    useEffect(() => {
        const data = category === 'all' ? listStoresSearch : listStoresSearch.filter((store: any) => store.category.replace(/\s/g, '') === category.replace(/\s/g, ''))
        setlistStores(data)
        setlistStoresCatelories(data)
    }, [category,listStoresSearch]);


    useEffect(() => {
        if (params[0] === true && params[1] == true && params[2] === true) {
            const data = listStoresCatelories.filter((store: any) => { return store.accept_rewards_points === true && store.accept_e_voucher === true && store.accept_shop_online === true });
            setlistStores(data)

        } else if (params[0] === true && params[1] == true && params[2] === false) {
            const data = listStoresCatelories.filter((store: any) => { return store.accept_rewards_points === true && store.accept_e_voucher === true });
            setlistStores(data)

        } else if (params[0] === true && params[1] == false && params[2] === true) {
            const data = listStoresCatelories.filter((store: any) => { return store.accept_rewards_points === true && store.accept_shop_online === true });
            setlistStores(data)

        } else if (params[0] === false && params[1] == true && params[2] === true) {
            const data = listStoresCatelories.filter((store: any) => { return store.accept_e_voucher === true && store.accept_shop_online === true });
            setlistStores(data)

        } else if (params[0] === false && params[1] == false && params[2] === true) {
            const data = listStoresCatelories.filter((store: any) => { return store.accept_shop_online === true });
            setlistStores(data)

        } else if (params[0] === false && params[1] == true && params[2] === false) {
            const data = listStoresCatelories.filter((store: any) => { return store.accept_e_voucher === true });
            setlistStores(data)

        } else if (params[0] === true && params[1] == false && params[2] === false) {
            const data = listStoresCatelories.filter((store: any) => { return store.accept_rewards_points === true });
            setlistStores(data)

        }
        else {
            setlistStores(listStoresCatelories)
        }
    }, [params]);
   
    const letterCount = useMemo(() => <FilterFirstCharacter handleFristChar={(value: any) => {
        setFristChar(value)
        setCategory('all')
        setParams([false, false, false])
       
    }} params={fristChar} />, [fristChar])

    return (
        <>
            <Box as="section" pt="30px" pl={{ base: '0px', lg: "60px" }} pr={{ base: '0px', lg: "60px" }}>
                {letterCount}
                <HStack w="100%" paddingX="1rem"
                    paddingY=".5rem" pt={3} spacing="150px" >
                    <SimpleGrid w="70%" columns={[1, null, 3]} paddingX="1rem"
                        paddingY=".5rem" pt={3} spacing="50px" >
                        <HStack align="center" direction="row">
                            <Switch onChange={() => setParams([!params[0], params[1], params[2]])} isChecked={params[0]} colorScheme="green" size="md" />
                            <Text>Issue Reward Points</Text>
                        </HStack>
                        <HStack align="center" direction="row">
                            <Switch onChange={() => setParams([params[0], !params[1], params[2]])} isChecked={params[1]} colorScheme="green" size="md" />
                            <Text>Accepts e-Vouchers</Text>
                        </HStack>
                        <HStack align="center" direction="row">
                            <Switch onChange={() => setParams([params[0], params[1], !params[2]])} isChecked={params[2]} colorScheme="green" size="md" />
                            <Text>e-Commerce</Text>
                        </HStack>
                    </SimpleGrid>
                    <ListCategories categories={categories} value={category} handleCategories={(catelory: any) => { setCategory(catelory) }} />
                </HStack>


                <SimpleGrid pt={3} columns={[1, null, 4]} spacing="5px" >
                    {listStores.length !== 0 ? listStores.map((store: any) => (
                        <Box pt={{ base: '5%', lg: '10px' }} key={'listEvent' + store.id}  >
                            <StoreCard
                                column
                                store={store}
                                idStore={store.id}
                                titleFontSize={'1em'}
                            />
                        </Box>)) : <Text>No Result</Text>}
                </SimpleGrid>

            </Box>
        </>
    )
}

export default ListStores;