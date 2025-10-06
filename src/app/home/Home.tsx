"use client"

import React from 'react'
import { Heading, Title } from './styled'

export const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' , gap:"40px" }}>
            <Title>Welcome to Tasty Plates</Title>
            <Heading>Your one-stop solution for delicious recipes</Heading>
        </div>
    )
}
