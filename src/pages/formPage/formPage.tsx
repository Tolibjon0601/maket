import { useState } from "react";
import { Form, Input, Select, Radio, Button, Upload, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";

// Types for the form data
interface FormValues {
  propertyType: string;
  region: string;
  district: string;
  remont: string;
  room: string;
  agentFee: string;
  price: number;
  exchange: string;
  installment: string;
  installmentDuration?: number;
  monthlyPayment: number;
  discount?: number;
  additionalInfo?: string;
  brokerageService: string;
  phoneNumber: string;
  upload: any; // Ant Design upload file list type
}

const { TextArea } = Input;

const FormPage = () => {
  const [installmentEnabled, setInstallmentEnabled] = useState<boolean>(false);

  const onFinish = (values: FormValues) => {
    console.log("Form values:", values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} className="max-w-4xl mx-auto">
      <div className="mt-[73px] flex justify-between">
        <div className="flex flex-col gap-7">
          <Form.Item
            style={{ width: 330 }}
            name="propertyType"
            label="Тип недвижимости"
            rules={[{ required: true, message: "Выберите тип недвижимости" }]}
          >
            <Select placeholder="Выберите тип">
              <Select.Option value="apartment">Квартира</Select.Option>
              <Select.Option value="house">Дом</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            style={{ width: 330 }}
            name="region"
            label="Регион"
            rules={[{ required: true, message: "Выберите регион" }]}
          >
            <Select placeholder="Выберите регион"></Select>
          </Form.Item>

          <Form.Item
            style={{ width: 330 }}
            name="district"
            label="Район"
            rules={[{ required: true, message: "Выберите район" }]}
          >
            <Select placeholder="Выберите район"></Select>
          </Form.Item>

          <Form.Item
            style={{ width: 330 }}
            name="remont"
            label="Ремонт"
            rules={[{ required: true, message: "Выберите тип ремонта" }]}
          >
            <Select placeholder="Выберите тип">
              <Select.Option value="new">Новый</Select.Option>
              <Select.Option value="renovated">Отремонтированный</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            style={{ width: 330 }}
            name="room"
            label="Количество комнат"
            rules={[{ required: true, message: "Выберите количество комнат" }]}
          >
            <Select placeholder="Выберите количество комнат">
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4+">4+</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="agentFee"
            label="Площадь"
            rules={[{ required: true, message: "Выберите площадь" }]}
          >
            <Radio.Group>
              <Radio value="yes">Есть</Radio>
              <Radio value="no">Нет</Radio>
            </Radio.Group>
          </Form.Item>
        </div>

        <div className="flex flex-col">
          <Form.Item
            style={{ width: 330 }}
            name="price"
            label="Цена"
            rules={[{ required: true, message: "Введите цену" }]}
          >
            <InputNumber
              placeholder="Введите цену"
              className="w-full"
              addonAfter="UZS"
            />
          </Form.Item>

          <Form.Item
            style={{ width: 330 }}
            name="exchange"
            label="Обмен"
            rules={[{ required: true, message: "Выберите обмен" }]}
          >
            <Radio.Group>
              <Radio value="yes">Есть</Radio>
              <Radio value="no">Нет</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            style={{ width: 330 }}
            name="installment"
            label="Рассрочка"
            rules={[{ required: true, message: "Выберите рассрочку" }]}
          >
            <Radio.Group
              onChange={(e) => setInstallmentEnabled(e.target.value === "yes")}
            >
              <Radio value="yes">Есть</Radio>
              <Radio value="no">Нет</Radio>
            </Radio.Group>
          </Form.Item>

          {installmentEnabled && (
            <Form.Item
              name="installmentDuration"
              label="Срок рассрочки (мес.)"
              rules={[{ required: true, message: "Введите срок рассрочки" }]}
            >
              <InputNumber placeholder="Месяцы" className="w-full" />
            </Form.Item>
          )}

          <Form.Item
            name="monthlyPayment"
            label="Месячный платеж"
            rules={[{ required: true, message: "Введите сумму" }]}
          >
            <InputNumber placeholder="Введите сумму" className="w-full" />
          </Form.Item>

          <Form.Item name="discount" label="Скидка">
            <InputNumber placeholder="%" className="w-full" />
          </Form.Item>

          <Form.Item style={{ width: 330 }} name="additionalInfo" label="Акция">
            <TextArea rows={4} placeholder="Описание акции" maxLength={200} />
          </Form.Item>

          <Form.Item
            name="brokerageService"
            label="Брокерское обслуживание"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Radio value="yes">Да</Radio>
              <Radio value="no">Нет</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            style={{ width: 330 }}
            name="phoneNumber"
            label="Номер телефона"
            rules={[{ required: true, message: "Введите номер телефона" }]}
          >
            <Input placeholder="+998" />
          </Form.Item>

          <div className="flex items-center">
<li></li>

            <Form.Item
              name="upload"
              label="Загрузить фотографии"
              valuePropName="fileList"
            >
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Загрузить фото</div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item
              name="upload"
              label="Загрузить фотографии"
              valuePropName="fileList"
            >
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Загрузить фото</div>
                </div>
              </Upload>
            </Form.Item>
          </div>
        </div>
      </div>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="bg-secondary text-white mt-4"
        >
          Опубликовать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormPage;
