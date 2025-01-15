import React from 'react';
import { Breadcrumb as ChakraBreadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';
import { BreadcrumbsArrowIcon } from './BreadcrumbsArrowIcon';
export const CommonBreadCrumb = ({
  breadcrumbItemValue,
  pt = '24px',
  pb = { base: '12px', md: '24px', xl: '40px' },
  display = { base: 'none', md: 'block' },
  px = { base: '16px', md: '10px', xl: '43px' },
  fontSize = '13px',
  className = '',
}) => {

  return (
    <ChakraBreadcrumb
      fontSize={fontSize}
      lineHeight='18px'
      fontWeight='400'
      spacing='2px'
      px={px}
      pt={pt}
      pb={pb}
      className={className}
      separator={<BreadcrumbsArrowIcon color='gray.500' />}
    >
      {breadcrumbItemValue.map((item, index) => {
        return (
          <BreadcrumbItem key={index} isCurrentPage={item.isCurrentPage} color={item.color}>
            <Link href={item.url} passHref legacyBehavior>
              <BreadcrumbLink _hover={{ textDecor: 'none' }}>{item.label}</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        );
      })}
    </ChakraBreadcrumb>
  );
};
