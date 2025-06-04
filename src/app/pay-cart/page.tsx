"use client";
import React from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useCartStore } from "@/stores/cart.store";

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
}

interface DeliveryMethod {
  id: string;
  name: string;
  description: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: "card",
    name: "Банковской картой",
    description: "Оплата картой Visa, Mastercard, МИР",
  },
  {
    id: "cash",
    name: "Наличными",
    description: "Оплата наличными при получении",
  },
  {
    id: "transfer bank-card",
    name: "Переводом",
    description:
      "Оплата переводом после отправления заказа,бот пришлет номер на который нужно сделать перевод",
  },
];

const deliveryMethods: DeliveryMethod[] = [
  { id: "pickup", name: "Самовывоз", description: "Забрать из магазина" },
  { id: "delivery", name: "Доставка", description: "Доставка курьером" },
];

export default function PaymentPage() {
  const { totalPrice } = useCartStore();
  const [selectedPayment, setSelectedPayment] = React.useState<PaymentMethod>(
    paymentMethods[0]
  );
  const [selectedDelivery, setSelectedDelivery] =
    React.useState<DeliveryMethod>(deliveryMethods[0]);
  const [address, setAddress] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    console.log({
      payment: selectedPayment,
      delivery: selectedDelivery,
      address: address,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mb-25">
      <h1 className="text-2xl font-bold mb-6">Оформление заказа</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Payment Method Selection */}
        <section>
          <h2 className="text-lg font-medium mb-4">Способ оплаты</h2>
          <RadioGroup value={selectedPayment} onChange={setSelectedPayment}>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <RadioGroup.Option
                  key={method.id}
                  value={method}
                  className={({ checked }: { checked: boolean }) =>
                    `${
                      checked
                        ? "bg-gray-200 border-gray-200"
                        : "border-gray-200"
                    } 
                    relative flex cursor-pointer rounded-lg border p-4 focus:outline-none transition-colors duration-200 ease-in-out`
                  }
                >
                  {({ checked }: { checked: boolean }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className="font-medium text-gray-900"
                            >
                              {method.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className="text-gray-500"
                            >
                              {method.description}
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-gray-700">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </section>

        {/* Delivery Method Selection */}
        <section>
          <h2 className="text-lg font-medium mb-4">Способ получения</h2>
          <RadioGroup value={selectedDelivery} onChange={setSelectedDelivery}>
            <div className="space-y-4">
              {deliveryMethods.map((method) => (
                <RadioGroup.Option
                  key={method.id}
                  value={method}
                  className={({ checked }: { checked: boolean }) =>
                    `${
                      checked
                        ? "bg-gray-200 border-gray-200"
                        : "border-gray-200"
                    } 
                    relative flex cursor-pointer rounded-lg border p-4 focus:outline-none transition-colors duration-200 ease-in-out`
                  }
                >
                  {({ checked }: { checked: boolean }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className="font-medium text-gray-900"
                            >
                              {method.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className="text-gray-500"
                            >
                              {method.description}
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-gray-700">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </section>

        {/* Address Input (shown only for delivery) */}
        {selectedDelivery.id === "delivery" && (
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Адрес доставки
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 py-2 px-2"
              placeholder="Введите адрес доставки"
              required
            />
          </div>
        )}

        <section className="border bg-gray-700 border-gray-700 text-white py-3 px-2 rounded-lg flex justify-between">
          <h2>Итого : </h2>
          <b>{totalPrice()} ₽</b>
        </section>

        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 ease-in-out"
        >
          Отправить заказ
        </button>
      </form>
    </div>
  );
}
