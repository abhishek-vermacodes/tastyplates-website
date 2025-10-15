"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Rating from "@mui/material/Rating"; // ⭐ MUI Rating
import {
  Breadcrumbs,
  Categories,
  Current,
  Description,
  Details,
  ImageWrapper,
  Line,
  Price,
  ProductContainer,
  ProductDetailContainer,
  ShopWrapper,
  Title,
  QuantityInput,
  AddToCartButton,
  ProductInfoWrapper,
  TabButton,
  TabContent,
  TabHeader,
  ReviewCard,
  ReviewComment,
  ReviewerName,
  ReviewForm,
  ReviewHeader,
  ReviewList,
  ReviewSection,
  SubmitButton,
  Subtitle,
  ProductSectionWrapper,
} from "./styled";
import { FaChevronRight } from "react-icons/fa";
import { menuData } from "@/components/data/Data";
import { Heading } from "@/components";
import SizeDropdown from "@/components/size-dropdown/SizeDropdown";
import leafTopLeft from "@/assets/icons/shape27.png";
import leafBottomRight from "@/assets/icons/shape11.png";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = menuData.find((item) => item.id.toString() === id);

  const [size] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "ingredients" | "reviews"
  >("description");

  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      rating: 5,
      comment: "Amazing product! Great quality and fast delivery.",
    },
    {
      name: "Sarah Lee",
      rating: 4,
      comment: "Loved it, but shipping took a bit longer.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newReview.name || !newReview.comment || newReview.rating === 0) {
      alert("Please fill out all fields and select a rating.");
      return;
    }

    setReviews((prev) => [...prev, newReview]);
    setNewReview({ name: "", rating: 0, comment: "" });
  };

  if (!product) {
    return (
      <p style={{ textAlign: "center", marginTop: "120px" }}>
        Product not found.
      </p>
    );
  }

  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const cartItem = {
      ...product,
      size,
      quantity,
    };

    console.log("Added to cart:", cartItem);
    alert(`Added ${quantity} x ${product.title} (${size}) to cart.`);
  };

  const filteredMenu = menuData.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return (
    <ProductSectionWrapper>
      <ProductContainer>
        <Heading
          heading=""
          subheading="Shop "
          textAlign="center"
          dividerline={false}
          desc=""
        />
        <Breadcrumbs>
          <Link href="/">Home</Link>
          <FaChevronRight />
          <Link href="/menu">Products</Link>
          <FaChevronRight />
          <Current>{product.title}</Current>
        </Breadcrumbs>
      </ProductContainer>

      <ShopWrapper>
        <Image
          src={leafTopLeft}
          alt="Decor 1"
          width={180}
          height={180}
          style={{
            position: "absolute",
            top: "400px",
            left: "40px",
            zIndex: 0,
            // opacity: 0.3,
          }}
        />
        <Image
          src={leafBottomRight}
          alt="Decor 2"
          width={200}
          height={200}
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            zIndex: 0,
            // opacity: 0.3,
          }}
        />

        <ProductDetailContainer>
          <ImageWrapper>
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              style={{ borderRadius: "16px" }}
            />
          </ImageWrapper>

          <Details>
            <Title>{product.title}</Title>
            <Price>${product.price.toFixed(2)}</Price>
            <Categories>Categories : {product.category}</Categories>
            <Line />
            <Description>{product.description}</Description>

            {/* Size Dropdown */}
            <SizeDropdown />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginTop: "16px",
              }}
            >
              {/* Quantity Input */}
              <QuantityInput
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min={1}
              />

              {/* Add to Cart Button */}
              <AddToCartButton onClick={handleAddToCart}>
                Add to Cart
              </AddToCartButton>
            </div>
          </Details>
        </ProductDetailContainer>

        {/* Product Info Tabs */}
        <ProductInfoWrapper>
          <TabHeader>
            <TabButton
              $active={activeTab === "description"}
              onClick={() => setActiveTab("description")}
            >
              Description
            </TabButton>
            <TabButton
              $active={activeTab === "ingredients"}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </TabButton>
            <TabButton
              $active={activeTab === "reviews"}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </TabButton>
          </TabHeader>

          <TabContent>
            {activeTab === "description" && <p>{product.description}</p>}

            {activeTab === "ingredients" && (
              <ul>
                <li>Organic flour</li>
                <li>Fresh cream</li>
                <li>Natural flavors</li>
                <li>No artificial additives</li>
              </ul>
            )}

            {activeTab === "reviews" && (
              <ReviewSection>
                <ReviewList>
                  {reviews.map((review, index) => (
                    <ReviewCard key={index}>
                      <ReviewHeader>
                        <ReviewerName>{review.name}</ReviewerName>
                        <Rating
                          name={`read-only-${index}`}
                          value={review.rating}
                          readOnly
                        />
                      </ReviewHeader>
                      <ReviewComment>{review.comment}</ReviewComment>
                    </ReviewCard>
                  ))}
                </ReviewList>

                <ReviewForm onSubmit={handleReviewSubmit}>
                  <Subtitle>Leave a Review</Subtitle>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={newReview.name}
                    onChange={(e) =>
                      setNewReview({ ...newReview, name: e.target.value })
                    }
                  />

                  <textarea
                    placeholder="Write your comment..."
                    value={newReview.comment}
                    onChange={(e) =>
                      setNewReview({ ...newReview, comment: e.target.value })
                    }
                  />

                  <Rating
                    name="user-rating"
                    value={newReview.rating}
                    onChange={(_, newValue) =>
                      setNewReview({ ...newReview, rating: newValue || 0 })
                    }
                    sx={{
                      "& .MuiRating-iconFilled": { color: "#f5b301" },
                      "& .MuiRating-iconHover": { color: "#f5b301" },
                    }}
                  />

                  <SubmitButton type="submit">Submit Review</SubmitButton>
                </ReviewForm>
              </ReviewSection>
            )}
          </TabContent>
        </ProductInfoWrapper>
      </ShopWrapper>
    </ProductSectionWrapper>
  );
}
