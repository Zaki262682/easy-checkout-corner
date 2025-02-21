
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface DeliveryAddress {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [address, setAddress] = useState<DeliveryAddress>({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  // Mock cart total - in a real app, this would come from a cart state
  const cartTotal = 399.98;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Placed Successfully!",
      description: "Your order will be delivered within 3-5 business days.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-in space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>
            <p className="mt-2 text-sm text-gray-500">
              Complete your order with cash on delivery
            </p>
          </div>

          <div className="border-t border-b py-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Delivery Fee</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between mt-4 font-bold">
              <span>Total</span>
              <span>${(cartTotal + 5).toFixed(2)}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  value={address.fullName}
                  onChange={(e) =>
                    setAddress((prev) => ({ ...prev, fullName: e.target.value }))
                  }
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Delivery Address
                </label>
                <Input
                  id="address"
                  value={address.address}
                  onChange={(e) =>
                    setAddress((prev) => ({ ...prev, address: e.target.value }))
                  }
                  required
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <Input
                    id="city"
                    value={address.city}
                    onChange={(e) =>
                      setAddress((prev) => ({ ...prev, city: e.target.value }))
                    }
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                    Postal Code
                  </label>
                  <Input
                    id="postalCode"
                    value={address.postalCode}
                    onChange={(e) =>
                      setAddress((prev) => ({ ...prev, postalCode: e.target.value }))
                    }
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={address.phone}
                  onChange={(e) =>
                    setAddress((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Place Order (Cash on Delivery)
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
