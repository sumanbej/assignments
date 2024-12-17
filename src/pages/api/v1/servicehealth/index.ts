import { NextApiRequest,NextApiResponse } from "next";
type ServiceStatus = {
    east_us: string;
    west_us: string;
    west_europe: string;
    east_asia: string;
    canary: string;
    staging: string;
  };
  
  type Service = {

    name: string;
    status: ServiceStatus;
  };
  
  const serviceHealthData: Service[] = [
  {
    name: "SFEdge",
    status: {
      east_us: "Healthy",
      west_us: "Degraded",
      west_europe: "Unhealthy",
      east_asia: "Healthy",
      canary: "Healthy",
      staging: "Healthy",
    },
  },
  {
    name: "Home",
    status: {
      east_us: "Healthy",
      west_us: "Healthy",
      west_europe: "Healthy",
      east_asia: "Healthy",
      canary: "Degraded",
      staging: "Healthy",
    },
  },
  {
    name: "Apps",
    status: {
      east_us: "Degraded",
      west_us: "Healthy",
      west_europe: "Degraded",
      east_asia: "Healthy",
      canary: "Healthy",
      staging: "Healthy",
    },
  },
  {
    name: "Games",
    status: {
      east_us: "Healthy",
      west_us: "Unhealthy",
      west_europe: "Healthy",
      east_asia: "Degraded",
      canary: "Healthy",
      staging: "Healthy",
    },
  },
  {
    name: "Search",
    status: {
      east_us: "Healthy",
      west_us: "Degraded",
      west_europe: "Unhealthy",
      east_asia: "Healthy",
      canary: "Degraded",
      staging: "Healthy",
    },
  },
  {
    name: "Ads",
    status: {
      east_us: "Unhealthy",
      west_us: "Degraded",
      west_europe: "Healthy",
      east_asia: "Healthy",
      canary: "Healthy",
      staging: "Degraded",
    },
  },
  {
    name: "CMS",
    status: {
      east_us: "Healthy",
      west_us: "Healthy",
      west_europe: "Healthy",
      east_asia: "Healthy",
      canary: "Healthy",
      staging: "Healthy",
    },
  },
  {
    name: "Spark",
    status: {
      east_us: "Degraded",
      west_us: "Degraded",
      west_europe: "Degraded",
      east_asia: "Healthy",
      canary: "Degraded",
      staging: "Healthy",
    },
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