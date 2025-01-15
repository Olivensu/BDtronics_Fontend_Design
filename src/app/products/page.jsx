import ProductCard from '@/components/Categories/ProductCard';
import { CommonBreadCrumb } from '@/components/common/CommonBreadCrumb';
import FilterCard from '@/components/common/FilterCard'

export default function Products() {
    const breadcrumbItemValue = [
        {
          label:  'Home',
          url: '/',
          isCurrentPage: false,
          color: '#767676',
        },
        {
          label: 'About',
          url: '/about',
          isCurrentPage: false,
          color: '#767676',
        },
        {
          label:  'Social Impact Blogs',
          url: '#',
          isCurrentPage: true,
          color: '#b7b7b7',
        },
      ];
  return (
    <div className='grid grid-cols-5 gap-7 m-10'>
        <FilterCard></FilterCard>
        <div className='col-span-4 grid grid-cols-4 gap-5'>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
    </div>
  )
}
