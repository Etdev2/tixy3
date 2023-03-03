export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cart_items: {
        Row: {
          cart_id: string | null
          color: string | null
          created_at: string | null
          hook_size: string | null
          id: string
          product_id: string | null
          quantity: number | null
          size: string | null
          updated_at: string | null
          weight: number | null
        }
        Insert: {
          cart_id?: string | null
          color?: string | null
          created_at?: string | null
          hook_size?: string | null
          id: string
          product_id?: string | null
          quantity?: number | null
          size?: string | null
          updated_at?: string | null
          weight?: number | null
        }
        Update: {
          cart_id?: string | null
          color?: string | null
          created_at?: string | null
          hook_size?: string | null
          id?: string
          product_id?: string | null
          quantity?: number | null
          size?: string | null
          updated_at?: string | null
          weight?: number | null
        }
      }
      carts: {
        Row: {
          created_at: string | null
          id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string | null
        }
      }
      categories: {
        Row: {
          categoriesSlug: string | null
          description: string | null
          id: string
          name: string | null
          src: string | null
        }
        Insert: {
          categoriesSlug?: string | null
          description?: string | null
          id: string
          name?: string | null
          src?: string | null
        }
        Update: {
          categoriesSlug?: string | null
          description?: string | null
          id?: string
          name?: string | null
          src?: string | null
        }
      }
      order_items: {
        Row: {
          color: string | null
          created_at: string | null
          hook_size: string | null
          id: string
          order_id: string | null
          product_id: string | null
          quantity: number | null
          size: string | null
          updated_at: string | null
          weight: number | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          hook_size?: string | null
          id: string
          order_id?: string | null
          product_id?: string | null
          quantity?: number | null
          size?: string | null
          updated_at?: string | null
          weight?: number | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          hook_size?: string | null
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity?: number | null
          size?: string | null
          updated_at?: string | null
          weight?: number | null
        }
      }
      orders: {
        Row: {
          created_at: string | null
          id: string
          total_price: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          total_price?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          total_price?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
      }
      people: {
        Row: {
          id: number
          name: string | null
          planet_id: number | null
        }
        Insert: {
          id?: number
          name?: string | null
          planet_id?: number | null
        }
        Update: {
          id?: number
          name?: string | null
          planet_id?: number | null
        }
      }
      planets: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
      }
      post: {
        Row: {
          created_at: string
          id: string
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          title?: string | null
        }
      }
      product_colors: {
        Row: {
          color: string | null
          created_at: string | null
          id: string
          product_id: string | null
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id: string
          product_id?: string | null
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: string
          product_id?: string | null
          updated_at?: string | null
        }
      }
      product_hook_sizes: {
        Row: {
          created_at: string | null
          hook_size: string | null
          id: string
          product_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          hook_size?: string | null
          id: string
          product_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          hook_size?: string | null
          id?: string
          product_id?: string | null
          updated_at?: string | null
        }
      }
      product_sizes: {
        Row: {
          created_at: string | null
          id: string
          product_id: string | null
          size: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          product_id?: string | null
          size?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          size?: string | null
          updated_at?: string | null
        }
      }
      product_subcategories: {
        Row: {
          category_id: string | null
          description: string | null
          id: string
          name: string | null
          src: string | null
          subcategoriesSlug: string | null
        }
        Insert: {
          category_id?: string | null
          description?: string | null
          id?: string
          name?: string | null
          src?: string | null
          subcategoriesSlug?: string | null
        }
        Update: {
          category_id?: string | null
          description?: string | null
          id?: string
          name?: string | null
          src?: string | null
          subcategoriesSlug?: string | null
        }
      }
      product_weights: {
        Row: {
          created_at: string | null
          id: string
          product_id: string | null
          updated_at: string | null
          weight: number | null
        }
        Insert: {
          created_at?: string | null
          id: string
          product_id?: string | null
          updated_at?: string | null
          weight?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          updated_at?: string | null
          weight?: number | null
        }
      }
      products: {
        Row: {
          alt: string | null
          average_rating: number | null
          description: string | null
          id: string
          image_url: string | null
          inventory_level: number | null
          name: string | null
          price: number | null
          product_subcategory_id: string | null
          productSlug: string | null
        }
        Insert: {
          alt?: string | null
          average_rating?: number | null
          description?: string | null
          id: string
          image_url?: string | null
          inventory_level?: number | null
          name?: string | null
          price?: number | null
          product_subcategory_id?: string | null
          productSlug?: string | null
        }
        Update: {
          alt?: string | null
          average_rating?: number | null
          description?: string | null
          id?: string
          image_url?: string | null
          inventory_level?: number | null
          name?: string | null
          price?: number | null
          product_subcategory_id?: string | null
          productSlug?: string | null
        }
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          password: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          password?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          password?: string | null
          updated_at?: string | null
        }
      }
      z_categories: {
        Row: {
          id: string
          image_id: string | null
          name: string
          parent_id: string | null
        }
        Insert: {
          id?: string
          image_id?: string | null
          name: string
          parent_id?: string | null
        }
        Update: {
          id?: string
          image_id?: string | null
          name?: string
          parent_id?: string | null
        }
      }
      z_images: {
        Row: {
          alt: string
          category_id: string | null
          description: string | null
          href: string
          id: string
          src: string
        }
        Insert: {
          alt: string
          category_id?: string | null
          description?: string | null
          href: string
          id?: string
          src: string
        }
        Update: {
          alt?: string
          category_id?: string | null
          description?: string | null
          href?: string
          id?: string
          src?: string
        }
      }
      z_pages_cat: {
        Row: {
          id: string
          name: string | null
        }
        Insert: {
          id?: string
          name?: string | null
        }
        Update: {
          id?: string
          name?: string | null
        }
      }
      z_product_cat: {
        Row: {
          id: string
          parent_product_id: string | null
          title: string | null
        }
        Insert: {
          id?: string
          parent_product_id?: string | null
          title?: string | null
        }
        Update: {
          id?: string
          parent_product_id?: string | null
          title?: string | null
        }
      }
      z_product_main: {
        Row: {
          category_name: string | null
          created_at: string | null
          description: string | null
          href: string | null
          id: string
          imageSrc: string | null
          name: string | null
          product_cat_id: string | null
        }
        Insert: {
          category_name?: string | null
          created_at?: string | null
          description?: string | null
          href?: string | null
          id?: string
          imageSrc?: string | null
          name?: string | null
          product_cat_id?: string | null
        }
        Update: {
          category_name?: string | null
          created_at?: string | null
          description?: string | null
          href?: string | null
          id?: string
          imageSrc?: string | null
          name?: string | null
          product_cat_id?: string | null
        }
      }
      z_product_parent_cat: {
        Row: {
          id: string
          pages_cat_id: string | null
          title: string | null
        }
        Insert: {
          id?: string
          pages_cat_id?: string | null
          title?: string | null
        }
        Update: {
          id?: string
          pages_cat_id?: string | null
          title?: string | null
        }
      }
      z_user_data: {
        Row: {
          created_at: string
          email: string
          id: string
          stripe_customer_id: string | null
          subscription_tier: Database["public"]["Enums"]["subscription_tier"]
        }
        Insert: {
          created_at?: string
          email: string
          id: string
          stripe_customer_id?: string | null
          subscription_tier?: Database["public"]["Enums"]["subscription_tier"]
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          stripe_customer_id?: string | null
          subscription_tier?: Database["public"]["Enums"]["subscription_tier"]
        }
      }
      z2_categories: {
        Row: {
          description: string | null
          id: string
          name: string
        }
        Insert: {
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          description?: string | null
          id?: string
          name?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_categories_and_subcategories: {
        Args: Record<PropertyKey, never>
        Returns: {
          category_name: string
          subcategory_slug: string
        }[]
      }
      get_catname_subslug: {
        Args: Record<PropertyKey, never>
        Returns: {
          category_name: string
          subcategory_slug: string
        }[]
      }
      get_planets: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          name: string | null
        }[]
      }
      getcatsubslug: {
        Args: Record<PropertyKey, never>
        Returns: {
          category_name: string
          subcategory_slug: string
        }[]
      }
      getpagecat: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          name: string | null
        }[]
      }
      getpages: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      partent_cat: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      test1: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      color_t: "blue" | "red" | "gray" | "black"
      subscription_tier: "FREE" | "STADARD" | "PREMIUM"
      subscription_tier_test: "FREE" | "STADARD" | "PREMIUM"
      test_type: "FREE" | "STADARD" | "PREMIUM"
      tier: "FREE" | "STADARD" | "PREMIUM"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
