import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="240px" borderRadius={10} overflow="hidden">
      <Skeleton height="160px" />
      <CardBody>
        <SkeletonText height="90px" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;