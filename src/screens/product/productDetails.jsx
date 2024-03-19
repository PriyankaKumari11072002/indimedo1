import React from "react";
import { useParams } from "react-router-dom";
import {
  useProductDtaWithIdQuery,
  //   useProductDtaWithIdQuery,
} from "../../services/apis/product";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function ProductDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useProductDtaWithIdQuery(id);
  //   const [productById, getProductResult] = useLazyProductDtaWithIdQuery();
  //   console.log(data, "data");
  //   useEffect(() => {
  //     if (id) {
  //       productById(id);
  //     }
  //   }, [id]);

  return (
    <div>
      {error && <div>Something went wrong</div>}
      {isLoading && <LoadingButton>Loading....</LoadingButton>}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={data?.images_Src[0]}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProductDetails;
