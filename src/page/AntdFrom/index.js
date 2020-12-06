import React, {Component} from "react";
import Form from '../../components/my-antd-form';
import Input from "../../components/my-input";

class AntdForm extends Component {
    render() {
        return(
            <div>
                <h3>AntdForm</h3>
                <Form>
                    <Form.Item>
                        <Input/>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default AntdForm;