import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller } from "react-hook-form";
import styles from "./CustomDatePicker.module.css";

interface Props {
  control: any;
}

const CustomDatePicker: React.FC<Props> = ({ control }) => {
  return (
    <div className=" mb-16">
      <p className=" mb-1">تاریخ ساخت</p>

      <Controller
        control={control}
        name="construction"
        rules={{ required: true }}
        render={({
          field: { onChange, name, value },

          formState: { errors },
        }) => (
          <div className={styles.date}>
            <DatePicker
              value={value || ""}
              onChange={(date) => onChange(date ? date : "")}
              format="YYYY/MM/DD"
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
            />
          </div>
        )}
      />
    </div>
  );
};

export default CustomDatePicker;
