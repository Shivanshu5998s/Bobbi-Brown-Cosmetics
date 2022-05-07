import React, { useState } from 'react'
import styled from "styled-components"
import ProductMapping from './ProductMapping';
import BestSellerPick3 from '../Images/BestSellerPick3.png'
import BestSellerPick4 from '../Images/BestSellerPick4.png'
import BestSellerPick5 from '../Images/BestSellerPick5.png'
import BestSellerPick2 from '../Images/BestSellerPick2.png'
// import logo from "../Images/logo.png"
// import { v4 as uuidv4 } from 'uuid';

const ShopAllBestsellersStyling = styled.div`
body{
    font-family:Roboto;
}
.topTextonImage{
    position:absolute;
    margin-top:-32vh;
    margin-left:40vw;
    font-size:50px;
    color: white;
    font-family:;
    letter-spacing: 2px;
}
.mappedGridding{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    width:89vw;
    margin:auto;
    margin-top:20px;
}
`;

const ShopAllBestsellers = () => {
    
    const bestSellers =  [
        {
            id: 1,
            "rating":"★★★☆☆",
            "name": "Long-Wear Cream Shadow Stick",
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96E49_600x600_0.jpg   ",
            "description": "Our ultimate quick eye shadow stick",
            "price": 30.00,
            "totalReview": 1192,
            "tag": "TRY IT ON",
            "color": "Incandescent"
        },
        {
            id: 2,
            "rating":"★★★★☆",
            "name": "Vitamin Enriched Face Base",
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E1LM01_600x600_0.jpg   ",
            "description": "Multitasking, moisturizing primer",
            "price": 64.00,
            "totalReview": 455,
            "color": "Lavender",
            "tag": "Top-Rated"
        },
        {
            id: 30,
            "justImage": BestSellerPick3,
        },
        {
            id: 3,
            "rating":"★★★☆☆",
            "name": "Skin Long-Wear Weightless Foundation SPF 15",
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EGXR04_600x600_0.jpg   ",
            "description": "16-hour, breathable, natural matte coverage",
            "price": 50.00,
            "tag": "Free Shipping & Returns",
            "color": "Natural (N-052 / 4)"
        },
        {
            id: 4,
            "rating":"★★★★★",
            "name": "Skin Corrector Stick",
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPXL09_600x600_0.jpg   ",
            "description": "Discoloration neutralizer for undereyes & face",
            "price": 32.00,
            "tag": "New",
            "totalReview": 85,
            "color": "Bisque"
        },
        {
            id: 5,
            "rating":"★★☆☆☆",
            "name": "Skin Concealer Stick",
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERFJ11_600x600_0.jpg   ",
            "description": "Easy-to-use, long-lasting concealer stick",
            "price": 32.00,
            "tag": "New",
            "totalReview": 688,
            "color": "Honey"
        },
        {
            id: 6,
            "rating":"★★★☆☆",
            "name": "Vitamin Enriched Eye Base",
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EL1901_600x600_0.jpg   ",
            "description": "Moisturizing undereye primer",
            "price": 56.00,
            "totalReview": 83,
            "tag": "New",
            "color": "Natural (N-022 / 4)"
        },
        {
            id: 7,
            "rating":"★★★★☆",
            "name": "Extra Lip Tint",
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EER901_600x600_0.jpg   ",
            "description": "Color-enhancing lip balm",
            "price": 34.00,
            "tag": "TRY IT ON",
            "totalReview": 324,
            "color": "Bare Pink"
        },
        {
            id: 8,
            "rating":"★★★☆☆",
            "name": "Sheer Finish Pressed Powder",
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ENPT01_600x600_0.jpg  ",
            "description": "Oil-absorbing powder",
            "price": 45.00,
            "tag": "EXCLUSIVE PRESALE",
            "totalReview": 890,
            "color": "Pale Yellow"
        },
        {
            id: 30,
            "justImage": BestSellerPick4,
        },
        {
            id: 9,
            "rating":"★★★★☆",
            "name": "Highlighting Powder",
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EFAA01_600x600_0.jpg  ",
            "description": "Pearl-infused illuminator",
            "price": 50.00,
            "tag": "New Shades",
            "totalReview": 2247,
            "color": "Pink Glow"
        },
        {
            id: 10,
            "rating":"★★★★★",
            "name": "Corrector",
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E6XW02_600x600_0.jpg  ",
            "description": "Full-coverage dark circle corrector",
            "price": 32.00,
            "tag": "Free Shipping & Returns",
            "totalReview": 293,
            "color": "Light Bisque"
        },
        {
            id: 11,
            "rating":"★★☆☆☆",
            "name": "Soothing Cleansing Oil",
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EM4201_600x600_0.jpg  ",
            "description": "Makeup remover and cleanser",
            "price": 50.00,
            "totalReview": 920,
            "tag": "EXCLUSIVE PRESALE",
            "color": "Natural (N-052 / 4)"
        },
        {
            id: 12,
            "rating":"★★★★☆",
            "name": "Crushed Oil-Infused Gloss",
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EMCK02_600x600_0.jpg   ",
            "description": "Hydrating, non-sticky lip gloss",
            "price": 29.00,
            "tag": "TRY IT ON",
            "totalReview": 867,
            "color": "Free Spirit"
        },
        {
            id: 13,
            "rating":"★★★★★",
            "name": "Crushed Lip Color",
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EH2102_600x600_0.jpg  ",
            "description": "Playful, effortless color",
            "price": 29.00,
            "tag": "TRY IT ON",
            "totalReview": 1336,
            "color": "Bare"
        },
        {
            id: 14,
            "rating":"★★★★☆",
            "name": "Smokey Eye Mascara",
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E9TN01_600x600_0.jpg   ",
            "description": "Long-wearing, volumizing mascara",
            "price": 32.00,
            "tag": "Best Seller",
            "totalReview": 678,
            "color": "Black"
        },
        {
            id: 15,
            "rating":"★★☆☆☆",
            "name": "Hydrating Face Cream",
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E65X01_600x600_0.jpg  ",
            "description": "Rich yet lightweight moisturizer",
            "price": 64.00,
            "tag": "Best Seller",
            "color": "Bare"
        },
        {
            id: 30,
            "justImage": BestSellerPick5,
        },
        {
            id: 16,
            "rating":"★★★★★",
            "name": "Instant Full Cover Concealer",
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EH9A01_600x600_0.jpg   ",
            "description": "Full-coverage, long-lasting concealer",
            "price": 32.00,
            "tag": "Best Seller",
            "totalReview": 2345,
            "color": "Porcelain"
        },
        {
            id: 17,
            "rating":"★★★☆☆",
            "name": "Skin Foundation Stick",
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EA6C04_600x600_0.jpg  ",
            "description": "Multitasking, on-the-go stick",
            "price": 50.00,
            "tag": "Free Shipping & Returns",
            "totalReview": 567,
            "color": "Natural (N-052 / 4)"
        },
        {
            id: 18,
            "rating":"★★★★★",
            "name": "Skin Clarifier No. 75",
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EFX201_600x600_0.jpg  ",
            "description": "Concentrated pore-clarifying treatment",
            "price": 49.00,
            "tag": "Best Seller",
            "color": "Bare"
        },
        {
            id: 19,
            "rating":"★★★★★",
            "name": "Hydrating Eye Cream",
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E65Y01_600x600_0.jpg   ",
            "description": "Gentle, quick-absorbing eye cream",
            "price": 56.00,
            "tag": "Best Seller",
            "color": "Teal"
        },
        {
            id: 20,
            "rating":"★★★★☆",
            "name": "Perfectly Defined Long-Wear Brow Pencil",
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ECNF09_600x600_0.jpg  ",
            "description": "All-in-one, refillable brow pencil",
            "price": 45.00,
            "tag": "Customer Favorite",
            "color": "Slate"
        },
        {
            id: 21,
            "rating":"★★★★★",
            "name": "Long-Wear Gel Eyeliner",
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E0KK07_600x600_0.jpg  ",
            "description": "Waterproof, no-smudge eyeliner",
            "price": 28.00,
            "tag": "TRY IT ON",
            "color": "Espresso Ink"
        },
        {
            id: 22,
            "rating":"★★★★★",
            "name": "Bronzing Powder",
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E39Y01_600x600_0.jpg   ",
            "description": "Sun-kissed, matte bronzer",
            "price": 44.00,
            "tag": "Best Seller",
            "color": "Natural"
        },
        {
            id: 23,
            "rating":"★★★☆☆",
            "name": "Beach",
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E7YW01_600x600_0.jpg   ",
            "description": "Light, summer-inspired perfume",
            "price": 80.00,
            "tag": "Top-Rated",
            "color": "Bare"
        },
        {
            id: 24,
            "rating":"★★★★☆",
            "name": "Mini Highlighting Powder",
            "image": "https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPH201_600x600_0.jpg   ",
            "description": "Pearlescent Glow on the Go",
            "price": 25.00,
            "tag": "Mini Size",
            "color": "Pink Glow"
        },
        {
            id: 25,
            "rating":"★★☆☆☆",
            "name": "Mini Vitamin Enriched Face Base",
            "image": " https://m.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPGN01_600x600_0.jpg  ",
            "description": "Oil-free moisturizer and primer",
            "price": 20.00,
            "tag": "Mini Size",
            "color": "Naturel"
        }
    ]
    const [data, setData] = useState([...bestSellers]);
    // console.log(data)

    return (
        <div>
            <ShopAllBestsellersStyling>
                <div>
                    <img style={{ width: "100vw" }} src='https://www.bobbibrowncosmetics.com/media/export/cms/mpp/SS20/MPP-Category-Header-BestSellers-PC_@2x.jpg' alt='' />
                    <h1 className='topTextonImage'>BESTSELLERS</h1>
                </div>
                <div>

                </div>
                <div className='mappedGridding'>
                    {data.map((e)=>(<ProductMapping {...e} key={e.id}/>))}
                </div>
                <div>
                    <img src={BestSellerPick2} alt='' style={{width:"100vw" , padding:"50px"}}/>
                </div>
                <h6 style={{width:"71%", margin:"auto", paddingBottom:"30px", fontSize:"14px", letterSpacing:"1px"}}>Our best moisturizer face & best skincare products to nourish skin and create the perfect canvas for makeup application. Bobbi's top-rated collection of best moisturizer face & best skincare products infuse skin with luxurious hydration. Discover our best moisturizer face & best skincare products to nourish, hydrate, repair & soothe all skin types.</h6>
            </ShopAllBestsellersStyling>
        </div>
    )
}

export default ShopAllBestsellers