import Button from '../../components/UI/Button'
import { InlineIcon } from '@iconify/react'
import downloadOutlined from '@iconify/icons-ant-design/download-outlined'

export default function HeroButton() {
    return (
        <div className="mt-10 flex space-x-1 lg:space-x-10">
            <Button type="link" href="#footer">
                Contact
            </Button>
            <Button
                transparent
                icon={
                    <InlineIcon
                        width={28}
                        height={28}
                        icon={downloadOutlined}
                        className="text-white"
                    />
                }>
                Download CV
            </Button>
        </div>
    )
}
