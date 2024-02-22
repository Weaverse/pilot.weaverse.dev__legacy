import type {CustomerDetailsFragment} from 'customer-accountapi.generated';
import {Link} from '~/components';

export function AccountDetails({
  customer,
}: {
  customer: CustomerDetailsFragment;
}) {
  const {firstName, lastName, emailAddress, phoneNumber} = customer;

  return (
    <>
      <div className="grid w-full gap-4 p-4 py-6 md:gap-8 md:p-8 lg:p-12">
        <h3 className="font-bold text-lead">Account Details</h3>
        <div className="lg:p-8 p-6 border border-gray-200 rounded">
          <div className="flex">
            <h3 className="font-bold text-base flex-1">Profile</h3>
            <Link
              prefetch="intent"
              className="underline text-sm font-normal"
              to="/account/edit"
            >
              Edit
            </Link>
          </div>
          <div className="mt-4 text-sm text-primary/50">Name</div>
          <p className="mt-1">
            {firstName || lastName
              ? (firstName ? firstName + ' ' : '') + lastName
              : 'Add name'}{' '}
          </p>

          <div className="mt-4 text-sm text-primary/50">Phone number</div>
          <p className="mt-1">{phoneNumber?.phoneNumber ?? 'N/A'}</p>

          <div className="mt-4 text-sm text-primary/50">Email address</div>
          <p className="mt-1">{emailAddress?.emailAddress ?? 'N/A'}</p>
        </div>
      </div>
    </>
  );
}
