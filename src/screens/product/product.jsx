import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useProductDtaQuery } from "../../services/apis/product";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";

function ProductPage() {
  const { data, error, isLoading } = useProductDtaQuery();

  return (
    <Suspense fallback={<LoadingButton>Loading....</LoadingButton>}>
      {error && <div>Something went wrong</div>}
      {isLoading && <LoadingButton>Loading....</LoadingButton>}
      
      {data?.map((item) => (
        <Link to={`/product/${item?._id}`} key={item?._id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Link>
      ))}
    </Suspense>
  );
}

export default ProductPage
