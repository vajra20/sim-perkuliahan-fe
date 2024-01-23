import React, { useState, useEffect } from "react";

// External Components
import Select from "react-select";
import { Modal, Button } from "antd";

export default function ModalForm({
	showModals,
	onClose,
	modalConfig,
	formDataValue,
	isUpdate,
	selectedOption,
	onChange,
	buttonLabel,
	onSubmit,
}) {
	// Modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { title, fields } = modalConfig;

	// Selected Option
	const [localSelectedOption, setLocalSelectedOption] = useState(null);

	console.log(localSelectedOption);

	useEffect(() => {
		setLocalSelectedOption(selectedOption);
	}, [selectedOption]);

	// Modal Open or Close
	useEffect(() => {
		setIsModalOpen(showModals);
	}, [showModals]);

	const handleClose = () => {
		setIsModalOpen(false);
		onClose();
	};

	const handleSubmit = () => {
		onSubmit();
	};

	// Render Input Modal
	const renderInput = (field) => {
		if (field.type === "select") {
			return (
				<Select
					className="w-full"
					isClearable
					isSearchable
					placeholder="Pilih Mata Kuliah"
					options={field.options}
					value={localSelectedOption}
					onChange={(newValues) => {
						setLocalSelectedOption(newValues);
						onChange(field.name, newValues);
					}}
				/>
			);
		} else {
			return (
				<input
					type={field.type}
					name={field.name}
					className="border-2 rounded-md p-1.5 w-full"
					value={formDataValue[field.name]}
					onChange={(e) => onChange(field.name, e.target.value)}
				/>
			);
		}
	};

	useEffect(() => {
		if (!isUpdate) {
			const initialData = {};

			fields.forEach((field) => {
				initialData[field.name] = "";
			});
		}
	}, [isUpdate, fields, formDataValue]);

	return (
    <Modal
      title={title}
      centered
      open={isModalOpen}
      onCancel={handleClose}
      footer={[
        <Button
          type="primary"
          key="ok"
          className="px-10 text-white bg-color-page text-lg flex items-center font-medium py-5"
          onClick={handleSubmit}
        >
          {buttonLabel}
        </Button>,
      ]}
    >
      <div className="flex flex-col gap-2 mt-5 mb-2">
        {fields.map((field, index) => (
          <div key={index} className="grid grid-cols-3 items-center">
            <span className="text-black font-normal sm:text-lg android:text-base">
              {field.label}
            </span>

            <div className="flex items-center gap-4 col-span-2">
              <span className="text-black font-normal sm:text-lg android:text-base">
                :{" "}
              </span>

              {renderInput(field)}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
