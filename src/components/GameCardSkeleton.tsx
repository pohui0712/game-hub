import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="160px" />
      <CardBody>
        <SkeletonText height="90px" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
