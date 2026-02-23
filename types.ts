export interface GuestCount {
  men: number;
  women: number;
  children: number;
}

export interface BBQSupplyItem {
  item: string;
  quantity: string;
  category: 'meat' | 'drink' | 'side';
}

export interface BBQPlan {
  supplies: BBQSupplyItem[];
  tips: string;
}

export interface BBQPlanResponse {
  items: {
    item: string;
    quantity: string;
    category: string;
  }[];
  tips: string;
}