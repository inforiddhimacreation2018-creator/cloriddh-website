import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function GET(request: NextRequest) {
  try {
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return NextResponse.json(
        { error: "Supabase is not configured yet." },
        { status: 500 }
      );
    }

    const productId = request.nextUrl.searchParams.get("productId");

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required." },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/reviews?product_id=eq.${encodeURIComponent(
        productId
      )}&select=id,product_id,name,rating,comment,created_at&order=created_at.desc`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to load reviews.");
    }

    const reviews = await response.json();

    return NextResponse.json({
      reviews: reviews.map((review: any) => ({
        id: review.id,
        productId: review.product_id,
        name: review.name,
        rating: review.rating,
        comment: review.comment,
        createdAt: review.created_at,
      })),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to load reviews." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return NextResponse.json(
        { error: "Supabase is not configured yet." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const productId = String(body.productId || "").trim();
    const name = String(body.name || "").trim();
    const comment = String(body.comment || "").trim();
    const rating = Number(body.rating);

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required." },
        { status: 400 }
      );
    }

    if (!name || name.length > 60) {
      return NextResponse.json(
        { error: "Please enter a valid name." },
        { status: 400 }
      );
    }

    if (!comment || comment.length > 500) {
      return NextResponse.json(
        { error: "Please enter a comment up to 500 characters." },
        { status: 400 }
      );
    }

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5." },
        { status: 400 }
      );
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/reviews`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        product_id: productId,
        name,
        rating,
        comment,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(errorText);

      return NextResponse.json(
        { error: "Unable to submit review." },
        { status: 500 }
      );
    }

    const result = await response.json();
    const review = result[0];

    return NextResponse.json({
      review: {
        id: review.id,
        productId: review.product_id,
        name: review.name,
        rating: review.rating,
        comment: review.comment,
        createdAt: review.created_at,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to submit review." },
      { status: 500 }
    );
  }
}