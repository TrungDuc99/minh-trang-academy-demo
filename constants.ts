
import { CareerPath, CareerPathInfo, SuccessStory } from './types';

export const CAREER_PATHS: CareerPathInfo[] = [
  {
    id: CareerPath.PROFESSIONAL_START,
    title: 'Làm nghề chuyên nghiệp',
    subLabel: 'Tôi chưa có nghề hoặc muốn làm lại từ đầu',
    description: 'Dành cho người muốn làm nghề tử tế – không chạy theo chiêu trò – đi lâu dài.',
    icon: 'content_cut',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: CareerPath.ADVANCED_SKILLS,
    title: 'Nâng cao tay nghề & chuyên sâu',
    subLabel: 'Tôi đã có nghề, muốn làm giỏi hơn & đúng hơn',
    description: 'Dành cho người đã có nghề muốn chuẩn hoá kỹ thuật và cập nhật công nghệ mới.',
    icon: 'verified',
    color: 'bg-primary/5 text-primary'
  },
  {
    id: CareerPath.SPA_STARTUP,
    title: 'Mở tiệm an toàn & bền vững',
    subLabel: 'Tôi muốn mở tiệm',
    description: 'Lộ trình khởi nghiệp không lỗ – không rủi ro – không mù mờ.',
    icon: 'storefront',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    id: CareerPath.INVESTMENT,
    title: 'Đầu tư & đồng hành hệ thống',
    subLabel: 'Tôi muốn đầu tư',
    description: 'Dành cho người muốn kinh doanh làm đẹp mà không cần trực tiếp làm nghề.',
    icon: 'handshake',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    id: CareerPath.INTERNATIONAL,
    title: 'Nghề làm đẹp quốc tế',
    subLabel: 'Tôi muốn đi làm ở nước ngoài',
    description: 'Đào tạo kỹ thuật viên quốc tế và xuất khẩu lao động tay nghề cao.',
    icon: 'public',
    color: 'bg-green-50 text-green-600'
  }
];

export const ACADEMY_STATS = [
  { label: 'Năm kinh nghiệm', value: '10+' },
  { label: 'Học viên tốt nghiệp', value: '5000+' },
  { label: 'Đối tác Spa', value: '200+' },
  { label: 'Tỷ lệ có việc làm', value: '100%' }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: '1',
    name: 'Chị Minh Anh',
    role: 'Làm nghề chuyên nghiệp',
    location: 'Xuất phát: Nội trợ, chưa biết gì về nghề.',
    quote: 'Từ sự mơ hồ, tôi đã tìm thấy sự tự tin và tay nghề vững chắc sau 3 tháng.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    tagColor: 'bg-blue-100 text-blue-700',
    tagText: 'PATH-01'
  },
  {
    id: '2',
    name: 'Hoàng Yến',
    role: 'Nâng cao tay nghề',
    location: 'Xuất phát: Đã học nơi khác nhưng tay nghề yếu.',
    quote: 'Minh Trang dạy tôi làm nghề tử tế, đó là lý do khách hàng luôn quay lại.',
    imageUrl: 'https://images.unsplash.com/photo-1594744803329-a584af1cae24?auto=format&fit=crop&q=80&w=800',
    tagColor: 'bg-primary/10 text-primary',
    tagText: 'PATH-02'
  },
  {
    id: '3',
    name: 'Mai Hoa',
    role: 'Mở tiệm an toàn',
    location: 'Xuất phát: Nhân viên văn phòng chuyển nghề.',
    quote: 'Lộ trình rõ ràng giúp tôi tự tin mở tiệm chỉ sau 1 năm đồng hành.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    tagColor: 'bg-purple-100 text-purple-700',
    tagText: 'PATH-03'
  }
];
