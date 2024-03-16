<template>
    <Form @submit="submitNewContact" :validation-schema="contactFormSchema">
        <div class="form-group">
            <label for="name">Tên</label>
            <Field name="name" type="text" class="form-control" v-model="newContact.name" />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="email">E-mail</label>
            <Field name="email" type="email" class="form-control" v-model="newContact.email" />
            <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="address">Địa chỉ</label>
            <Field name="address" type="text" class="form-control" v-model="newContact.address" />
            <ErrorMessage name="address" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="phone">Điện thoại</label>
            <Field name="phone" type="tel" class="form-control" v-model="newContact.phone" />
            <ErrorMessage name="phone" class="error-feedback" />
        </div>
        <div class="form-group form-check">
            <input name="favorite" type="checkbox" class="form-check-input" v-model="newContact.favorite" />
            <label for="favorite" class="form-check-label">
                <strong>Liên hệ yêu thích</strong>
            </label>
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button type="button" class="ml-2 btn btn-secondary" @click="cancel">
                Hủy
            </button>
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import ContactService from "@/services/contact.service";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const contactFormSchema = yup.object().shape({
            name: yup
            .string()
            .required("Tên phải có giá trị.")
            .min(2, "Tên phải ít nhất 2 ký tự.")
            .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
            .string()
            .email("E-mail không đúng.")
            .max(50, "E-mail tối đa 50 ký tự."),
            address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
            phone: yup
            .string()
            .matches(
                /((09|03|07|08|05)+([0-9]{8})\b)/g,
                "Số điện thoại không hợp lệ."
            ),
        });
        return {
            newContact: {
                name: '',
                email: '',
                address: '',
                phone: '',
                favorite: false
            },
            contactFormSchema,
        };
    },
    methods: {
        async submitNewContact() {
            try {
                await ContactService.create(this.newContact);
                alert('Liên hệ mới đã được thêm thành công.');
                this.$router.push({ name: "contactbook" });
            } catch (error) {
                console.error(error);
                alert('Có lỗi xảy ra khi thêm liên hệ mới.');
            }
        },
        cancel() {
            this.$router.push({ name: "contactbook" });
        }
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>
