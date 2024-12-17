import { NextApiRequest,NextApiResponse } from "next";
type ServiceHealth = {
    service_name: string;
    region: string;
    health: string;
  };
  
  const serviceHealthData: ServiceHealth[] = [
    {
      service_name: "sfedge",
      region: "West US",
      health: "Healthy",
    },
    {
      service_name: "sfedge",
      region: "East US",
      health: "Healthy",
    },
    {
      service_name: "sfedge",
      region: "East Asia",
      health: "Unhealthy",
    },
    {
      service_name: "spark",
      region: "West US",
      health: "Healthy",
    },
    {
      service_name: "spark",
      region: "East US",
      health: "Unhealthy",
    },
    {
      service_name: "spark",
      region: "East Asia",
      health: "Healthy",
    },
  ];
  
  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === 'GET') {
      res.status(200).json(serviceHealthData);
    } else {
      res.status(404).end();
    }
  }